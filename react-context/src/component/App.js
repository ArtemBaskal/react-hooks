import React from "react";
import UserCreate from "./UserCreate";
// import LanguageContext from "../context/LanguageContext";
import { LanguageStore } from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  // state = { language: "english" };

  // onLanguageChange = language => {
  //   this.setState({ language });
  // };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector /* onLanguageChange={this.onLanguageChange} */ />
          <ColorContext.Provider value="red">
            {/* <LanguageContext.Provider value={this.state.language}> */}
            <UserCreate />
            {/* </LanguageContext.Provider> */}
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
