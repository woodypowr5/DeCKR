import { View } from "../../types/view.class";

const args = {
    name: 'login',
    template: `
        <div class="mdl-grid">
            <div class="registration-form-container mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
                <div class="mdl-card__title mdl-color--teal-500">
                    <h2 class="mdl-card__title-text mdl-color-text--white">Login</h2>
                </div>
                <div class="mdl-card__supporting-text mdl-grid">
                    <b class="mdl-color-text--accent">Error message goes here</b>
                    <form action="javascript:void(0);">
                        <input type="hidden" name="action" value="login"/>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
                            <input class="mdl-textfield__input" type="text" id="textfield_login_username" placeholder="Username" name="textfield_login_username"/>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
                            <input class="mdl-textfield__input" type="password" id="textfield_login_password" placeholder="Password" name="textfield_login_password"/>
                        </div>
                        <div class="mdl-cell mdl-cell--12-col send-button" align="center">
                            <button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored" onclick="window.deckrApp.login()">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>    
    `,
    anchorElementId: 'main-content'
}

export const loginView = new View(args.name, args.template, args.anchorElementId);
