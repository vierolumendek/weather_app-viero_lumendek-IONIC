import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-toolbar">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding ion-padding-about">
                <p>
                    Aplikasi merupakan aplikasi pemantau situasi cuaca. Aplikasi ini
                    dibuat menggunakan Ionic Framework.
                </p>
                <p>Nama: Viero Lumendek <br />NIM: 210211060119</p>
            </IonContent>
        </IonPage>
    )
}

export default About;