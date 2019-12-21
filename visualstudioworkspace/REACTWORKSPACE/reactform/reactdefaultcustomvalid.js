import React, { Component } from "react";
import ReactDOM from "react-dom";
import validator from "validator";
//npm install react-inputs-validation
import { Textbox } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import "./styles.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            email: ""
        };
    }

    render() {
        const { phone, email } = this.state;
        return (
            <div className="App">
                <div className="container">
                    <div style={{ position: "relative" }}>
                        <Textbox
                            attributesInput={{
                                id: "phone",
                                placeholder: "Place your phone here ^-^",
                                type: "text"
                                
                            }}
                            value={phone} //Optional.[String].Default: "".
                            onChange={(phone, e) => {
                                this.setState({ phone });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => { }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "phone", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                customFunc: phone => {
                                    if (validator.isMobilePhone(phone, "en-US")) {
                                        return true;
                                    } else {
                                        return "is not a valid phone number";
                                    }
                                }
                            }}
                        />
                        <Textbox
                            attributesInput={{
                                id: "email",
                                placeholder: "Place your email here ^-^",
                                type: "text"
                            }}
                            value={email} //Optional.[String].Default: "".
                            onChange={(email, e) => {
                                this.setState({ email });
                                console.log(e);
                            }} //Required.[Func].Default: () => {}. Will return the value.
                            onBlur={e => { }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: "email", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                customFunc: email => {
                                    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                    if (reg.test(String(email).toLowerCase())) {
                                        return true;
                                    } else {
                                        return "is not a valid email address";
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
