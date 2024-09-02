function PersonalInfo({fullNameText, setFullNameText}) {

    return (
      <div className='personal-info'>
        <p>Personal Info..</p>
        <form>
          <div>
           <label htmlFor="fullName">Full Name </label>
           <input
            type="text"
            id="fullName"
            value={fullNameText}
            onChange={(e) => setFullNameText(e.target.value)}
            />
          </div>
  
          <div>
           <label htmlFor="email">Email </label>
           <input type="email" id="email"/>
          </div>
  
          <div>
           <label htmlFor="phoneNumber">PhoneNumber </label>
           <input type="tel" id="phoneNumber"/>
          </div>
  
        
  
        </form>
      </div>
    )
  }

export default PersonalInfo