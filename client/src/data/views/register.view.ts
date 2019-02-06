import { View } from "../../types/view.class";

const args = {
    name: 'register',
    template: `
        <h2>
            Registration
        </h2>
        <h3>
            Already registerd? Log in <a onclick="window.deckrApp.navigateLogin()">here</a>
        </h3>
    
        
            <div class="mdl-grid">
                <div class="registration-form-container mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
                    <div class="mdl-card__title mdl-color--teal-500">
                        <h2 class="mdl-card__title-text mdl-color-text--white">Create a New Account</h2>
                    </div>
                    <div class="mdl-card__supporting-text mdl-grid">
            
                        <b class="mdl-color-text--accent"></b>
            
                        <form method="POST" action="">
                            <input type="hidden" name="action" value="register"/>
            
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
                                <label class="mdl-textfield__label mdl-color-text--grey" for="textfield_new_username">Username</label>
                                <input class="mdl-textfield__input" type="text" id="textfield_new_username" name="username" pattern="^[a-z0-9_-]{3,15}$"/>
                                <span class="mdl-textfield__error">3-15 characters with only lowercase letters, digits, underscore, and hyphen</span>
                            </div>
            
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
                                <label class="mdl-textfield__label mdl-color-text--grey" for="textfield_new_password">Password</label>
                                <input class="mdl-textfield__input" type="password" id="textfield_new_password" name="password"
                                        pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})"/>
                                <span class="mdl-textfield__error">
                                    6-20 characters with at least a digit, lowercase and uppercase letters,
                                    and special symbol in @#$%
                                </span>
                            </div>
            
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
                                <label class="mdl-textfield__label mdl-color-text--grey" for="textfield_password_confirm">Password Confirm</label>
                                <input class="mdl-textfield__input" type="password" id="textfield_password_confirm" name="password_confirm"/>
                            </div>
            
                            <div class="mdl-cell mdl-cell--12-col send-button" align="center">
                                <button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored" id="login">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>    
        
    `,
    anchorElementId: 'main-content'
}

export const registerView = new View(args.name, args.template, args.anchorElementId);
