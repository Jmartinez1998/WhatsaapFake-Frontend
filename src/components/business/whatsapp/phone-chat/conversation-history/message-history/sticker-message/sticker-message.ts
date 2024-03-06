import { defineComponent } from "vue";

import useOverspread from "../../../../../../../composables/common/overspread.composable";
import usePhoneChat from "../../../../../../../composables/business/phone-chat.composable";

import { TypeOverspreadEnum } from "../../../../../../../enums/type-overspread.enum";

export default defineComponent({
    props: {
        multimediaMessage: {
            type: Object,
            default: {}
        }
    },
    setup(props) {

        const {
            setType,
            openCloseOverspread
        } = useOverspread();

        const {
            setMultimediaMessage
        } = usePhoneChat();

        const openOverlayPreview = () => {
            setType(TypeOverspreadEnum.PREVIEW);
            setMultimediaMessage(props.multimediaMessage);
            openCloseOverspread(true);
        }

        return {
            openOverlayPreview
        }
    }
});