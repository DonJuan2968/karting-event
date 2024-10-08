// import css
import './register.css'

const Register = () => {
    return (
        <div className="container-form">
      <form className="inschrijf-form">
        <h2>Inschrijven</h2>
        <div className="form-group">
          <label htmlFor="name">Naam:</label>
          <input type="text" id="name" placeholder="Voer je naam in" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Voer je email in" />
        </div>
        <button type="submit" className="submit-btn">Inschrijven</button>
      </form>
    </div>
    )
}

export default Register



