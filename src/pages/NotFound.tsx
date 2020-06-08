import { Notification } from '../components/notification/notification'
export const NotFound = () => (
    <div class="row">
        <div class="col-sm-12">
            <Notification
                type="error"
                title="Niet gevonden"
                description={`De pagina die je hebt aangeroepen kon niet worden gevonden`} />
        </div>
    </div>
)