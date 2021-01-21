import React, { useState, useEffect } from 'react'

function LanguageName () {

    const [language, setLanguage] = useState('cSharp')
    

    const changFaveLanguage = () => {
        const theLang = (language === 'cSharp' ? 'javaScript' : 'ruby')
        setLanguage(theLang)
    }

    useEffect(() => {
        console.log("effect and effacr like calling api")
        //setLanguage('ruby')
    },[language]) //will update if the language is changed

    
        return (
            <div>
              {language} <br />
              <button onClick={changFaveLanguage}> Chage Fav language </button> 
            </div>
        )
    
}

export default LanguageName;