import { contrastOutline, settings, settingsOutline, information } from "ionicons/icons";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Home.css';
import HomeContentContainer from "../components/HomeContentContainer";
import { useContext, useEffect, useState } from "react";
import { AppConfig } from "../SettingContext";

const Home: React.FC = () => {
  const { setting } = useContext(AppConfig)

  useEffect(() => {
    console.log(setting)
  }, [setting])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar">
          {/* Setting page */}
          <IonButton className="ion-button" slot="start" routerLink="/settings">
            <IonIcon className="ion-icon" icon={settingsOutline} />
          </IonButton>

          {/* Header title */}

          <IonTitle className="ion-text-center ion-text-capitalize">Weather App</IonTitle>

          {/* information / About button */}
          <IonButton className="ion-button" slot="end" routerLink="/about">
            <IonIcon className="ion-icon" icon={information} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">

        {/* Search Bar */}

        <HomeContentContainer setting={setting} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
