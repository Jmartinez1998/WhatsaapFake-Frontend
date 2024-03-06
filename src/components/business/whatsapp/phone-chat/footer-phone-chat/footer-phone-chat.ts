import { defineComponent, ref, watch } from "vue";

import useContact from "../../../../../composables/common/contact.composable";
import useConversationHistory from "../../../../../composables/business/conversation-history.composable";
import useMultimediaOptions from "../../../../../composables/business/multimedia-options.composable";

export default defineComponent({
    setup() {

        const {
            getContactSelect
        } = useContact();

        const {
            multimediaOptionsComponent,
            openCloseMultimediaOptions
        } = useMultimediaOptions();

        const {
            pushMessage
        } = useConversationHistory();

        const textMessage = ref('');
        const showIconSend = ref(false);

        const isOpenMultimediaOptions = useMultimediaOptions().isOpen;
        
        const showIconSendMessage = () => {     
            let contenteditable: any = document.querySelector('.message-multimedia');       
            textMessage.value = contenteditable.textContent;
            if(!textMessage.value || textMessage.value == "") {
                showIconSend.value = false;
                return;
            }
            showIconSend.value = true;
        }

        const sendMessage = () => {
            const contenteditable: any = document.querySelector('.message-multimedia');
            pushMessage({
                "type": "conversation",
                "messageContent": contenteditable.textContent,
            });
            contenteditable.innerHTML = '';
        }


        return {
            isOpenMultimediaOptions,
            showIconSend,
            multimediaOptionsComponent,
            openCloseMultimediaOptions,
            sendMessage,
            showIconSendMessage
        }
    }
});