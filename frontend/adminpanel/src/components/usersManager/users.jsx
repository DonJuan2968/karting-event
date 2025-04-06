// import css
import './users.css';

// import modules
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserXmark, faUserPen, faEnvelope, faIdCard, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Users = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [users, setUsers] = useState([])
    const [selectedCount, setSelectedCount] = useState(0)
    const [selectedUser, setSelectedUser] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [deleteWarning, setDeleteWarning] = useState('')

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users')
                setUsers(response.data.users)
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        }

        fetchUsers()
    }, [])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleAddUser = () => {
        setShowForm(true)
    }

    const handleCloseForm = () => {
        setShowForm(false)
        setShowEditForm(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const email = e.target.email.value
        const leerlingnummer = e.target.leerlingnummer.value

        try {
            const response = await axios.post('http://localhost:5000/api/users', {
                username,
                email,
                leerlingnummer,
            })

            alert(response.data.message)
            const fetchUsers = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/users')
                    setUsers(response.data.users)
                } catch (error) {
                    console.error('Error fetching users:', error)
                }
            }
            fetchUsers()
            handleCloseForm()
        } catch (error) {
            console.error('Error adding user:', error)
            alert(error.response.data.message || 'Er is een fout opgetreden.')
        }
    }

    const handleSelectAll = (e) => {
        const checked = e.target.checked
        const checkboxes = document.querySelectorAll('.checkbox')
        checkboxes.forEach(checkbox => {
            checkbox.checked = checked
        })
        setSelectedCount(checked ? users.length : 0)
    };

    const handleCheckboxChange = (e, user) => {
        const isChecked = e.target.checked
    
        if (isChecked) {
            setSelectedUser(user)
        } else {
            if (selectedUser && selectedUser.id === user.id) {
                setSelectedUser(null)
            }
        }
    
        const currentCount = isChecked ? selectedCount + 1 : selectedCount - 1
        setSelectedCount(currentCount)
    
        if (currentCount > 0) {
            setDeleteWarning('')
        }
    }
    

    const handleDeleteSelected = async () => {
        if (selectedCount === 0) {
            setDeleteWarning('Selecteer ten minste één gebruiker om te verwijderen.')
            return
        }

        const confirmed = window.confirm(`Weet je zeker dat je ${selectedCount} geselecteerde gebruiker(s) wilt verwijderen?`)
        if (!confirmed) {
            return
        }

        const userIds = Array.from(document.querySelectorAll('.checkbox:checked')).map(checkbox => {
            return parseInt(checkbox.closest('.table-row').getAttribute('data-user-id'))
        })

        try {
            await Promise.all(userIds.map(userId => axios.delete(`http://localhost:5000/api/users/${userId}`)))
            alert('Geselecteerde gebruikers zijn verwijderd.')

            const fetchUsers = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/users')
                    setUsers(response.data.users)
                } catch (error) {
                    console.error('Error fetching users:', error)
                }
            }
            fetchUsers()

            setSelectedCount(0)
        } catch (error) {
            console.error('Error deleting users:', error)
            alert('Er is een fout opgetreden bij het verwijderen van gebruikers.')
        }
    }

    const handleEditUser = () => {
        //* console.log("selectedUser:", selectedUser) debug statement
        if (selectedUser) {
            setShowEditForm(true)
        } else {
            alert("Geen gebruiker geselecteerd om te bewerken")
        }
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const email = e.target.email.value
        const leerlingnummer = e.target.leerlingnummer.value

        try {
            await axios.put(`http://localhost:5000/api/users/${selectedUser.id}`, {
                username,
                email,
                leerlingnummer,
            })

            alert('Gebruiker succesvol bijgewerkt.')
            const fetchUsers = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/users')
                    setUsers(response.data.users)
                } catch (error) {
                    console.error('Error fetching users:', error)
                }
            }
            fetchUsers()
            handleCloseForm()
        } catch (error) {
            console.error('Error updating user:', error)
            alert('Er is een fout opgetreden bij het bijwerken van de gebruiker.')
        }
    }

    // Filter de gebruikers op basis van de zoekterm
    const filteredUsers = users.filter(user => 
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="content-users-container">
            <div className="users-title">
                <h2>User Management</h2>
                <p>Manage hier de mensen die zich hebben ingeschreven</p>
            </div>

            <div className="users-controls">
                <div className="all-users">
                    <p>Alle inschrijvingen <span className="user-count">{filteredUsers.length}</span></p>
                </div>
                <div className="search-add">
                    <input 
                        type="text"
                        placeholder="Zoek via naam..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button onClick={handleAddUser} className="add-user-button">
                        <FontAwesomeIcon icon={faUserPlus} /> Iemand toevoegen
                    </button>
                    {selectedCount > 0 && (
                        <button className="edit-user-button" onClick={handleEditUser}>
                           <FontAwesomeIcon icon={faUserPen} /> Bewerken
                        </button>
                    )}
                    {selectedCount > 0 && (
                        <button className="delete-user-button" onClick={handleDeleteSelected}>
                           <FontAwesomeIcon icon={faUserXmark} /> Verwijderen
                        </button>
                    )}
                </div>
            </div>

            {deleteWarning && <div className="delete-warning">{deleteWarning}</div>}

            {showForm && (
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="add-user-form form">
                        <h3>Voeg een nieuwe gebruiker toe</h3>
                        <div className="form-group input-icon">
                            <FontAwesomeIcon icon={faUser} />
                            <input type="text" name="Gebruikersnaam" placeholder="Gebruikersnaam" required />
                        </div>
                        <div className="form-group input-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="email" name="E-mail" placeholder="E-mail" required />
                        </div>
                        <div className="form-group input-icon">
                            <FontAwesomeIcon icon={faIdCard} />
                            <input type="text" name="leerlingnummer" placeholder="Leerlingnummer" required />
                        </div>
                        <button type="submit" className="submit-button">Toevoegen</button>
                        <button type="button" className="cancel-button" onClick={handleCloseForm}>Annuleren</button>
                    </form>
                </div>
            )}

            {showEditForm && selectedUser && (
                <div className="form-container">
                    <form onSubmit={handleEditSubmit} className="edit-user-form form">
                        <h3>Bewerk gebruiker</h3>
                        <div className="form-group input-icon">
                            <FontAwesomeIcon icon={faUser} />
                            <input type="text" name="username" defaultValue={selectedUser.username} required />
                        </div>
                        <div className="form-group input-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="email" name="email" defaultValue={selectedUser.email} required />
                        </div>
                        <div className="form-group input-icon">
                            <FontAwesomeIcon icon={faIdCard} />
                            <input type="text" name="leerlingnummer" defaultValue={selectedUser.leerlingnummer} required />
                        </div>
                        <button type="submit" className="submit-button">Bijwerken</button>
                        <button type="button" className="cancel-button" onClick={handleCloseForm}>Annuleren</button>
                    </form>
                </div>
            )}

            <div className="user-management-table">
                <div className="table-header">
                    <input type="checkbox" className="select-all-checkbox checkbox" onChange={handleSelectAll} />
                    <span>Naam</span>
                    <span>E-mail</span>
                    <span>Team</span>
                </div>
                
                {filteredUsers.map(user => (
                    <div className="table-row" key={user.id} data-user-id={user.id}>
                        <input type="checkbox" className="checkbox" onChange={(e) => handleCheckboxChange(e, user)} />
                        <div className="user-info">
                            <div className="user-details">
                                <p>{user.username}</p>
                            </div>
                        </div>
                        <div className="user-access">
                            <p className="email">{user.email}</p>
                        </div>
                        <div className="user-team">
                            <p>{user.teams.join(',') || 'Geen'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users
