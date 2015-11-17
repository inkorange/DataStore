var appBarHeight = 64;
var mainPadding = 20;

import alertColor from "./DoorAlertScheme";
import { TLAPalette } from '../themes/MaterialTheme';


export default {
    default: {
        appBarHeight : appBarHeight + 'px',
        mainPadding : mainPadding + 'px'
    },

    // layouts *********************************
    MainContent: {
        position: 'absolute',
        top: appBarHeight + 'px',
        right: 0,
        bottom: 0,
        left: 0,
        overflow: 'auto',
        padding: mainPadding/2 + 'px'

    },

    TwoColumnLayout: {
        display: '-webkit-box; display: -webkit-flex; display: flex',
        flexWrap: 'wrap',
        marginBottom: mainPadding + 'px',
        left: {
            width:'calc(50% - ' + mainPadding/2 + 'px)',
            marginRight:  mainPadding + 'px'

        },
        right: {
            width:'calc(50% - ' + mainPadding/2 + 'px)'
        }
    },

    IconMenu: {
        MenuPanel: {
            position: "absolute",
            top: (appBarHeight - 10) + "px",
            right: mainPadding + "px",
            //width: "600px",
            padding: mainPadding + 'px'
        }
    },

    MenuFilter: {
        top: '55px',
        width: '640px'

    },

    Form : {
        Fieldset: {
            border: "none",
            margin: 0,
            padding: 0,
            label : {
                fontSize: '1.6rem',
                marginBottom: mainPadding + 'px',
                display: 'block',
                color: TLAPalette.palette.primary2Color
            }
        },
        TextInput: {
            margin: mainPadding/2 + 'px 0'
        }
    },

    Dashboard : {
        display: '-webkit-box; display: -webkit-flex; display: flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: mainPadding/2 + 'px'
    }

}
