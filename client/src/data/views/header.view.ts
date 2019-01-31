import { View } from "../../types/view.class";

const args = {
    name: 'header',
    template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--drawer
    mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <div class="mdl-layout-spacer"></div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
                        <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
                            <i class="material-icons">search</i>
                        </label>
                    <div class="mdl-textfield__expandable-holder">
                        <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp">
                    </div>
                </div>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Title</span>
            <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="">Dashboard</a>
                <a class="mdl-navigation__link" href="">Trainings</a>
                <a class="mdl-navigation__link" href="">Contracts</a>
                <a class="mdl-navigation__link" href="">Security Groups</a>
                <hr>
                <a class="mdl-navigation__link" href="">Change Password</a>
                <a class="mdl-navigation__link" href="">Login</a>
                <a class="mdl-navigation__link" href="">Logout</a>
            </nav>
        </div>
    `,
    anchorElementId: ''
}

export const headerView = new View(args.name, args.template, args.anchorElementId);
