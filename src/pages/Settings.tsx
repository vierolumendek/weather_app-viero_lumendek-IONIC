import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar
} from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { AppConfig } from '../SettingContext';
import { checkmark, create, refresh, warning } from "ionicons/icons";

const Settings: React.FC = () => {
  const { setting, setSettings } = useContext(AppConfig)
  const [isApiKeyEditMode, setApiKeyEditMode] = useState(false)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding ion-padding-setting">
        <IonGrid>
          <IonRow>
            <IonCol className="api_key_container">
              <IonInput
                label="API KEY"
                labelPlacement="stacked"
                fill="outline"
                // disabled={true}
                className="ion-margin-bottom"
                onIonChange={e => {
                  setSettings({
                    ...setting,
                    'apiKey': e.target.value
                  })
                }}
                value={setting?.apiKey}
                required={true}
                readonly={!isApiKeyEditMode}
              />
              {isApiKeyEditMode &&
                <IonItem color="warning">
                  <IonCol size="auto">
                    <IonIcon icon={warning} className='ion-padding-right' size="large"></IonIcon>
                  </IonCol>
                  <IonCol>
                    <IonText className='ion-padding-left ion-margin-left'>
                      <p>
                        Mengganti API KEY dengan tidak benar dapat mengakibatkan
                        aplikasi tidak dapat bekerja dengan baik
                      </p>
                    </IonText>
                  </IonCol>
                </IonItem>
              }
            </IonCol>
            <IonCol size="auto" className="ion-justify-content-center">
              <IonToolbar>
                <IonButtons>
                  {!isApiKeyEditMode
                    ? (
                      <IonButton onClick={e => setApiKeyEditMode(true)}>
                        <IonIcon icon={create} size="small" onClick={e => setApiKeyEditMode(true)}></IonIcon>
                      </IonButton>
                    )
                    : (
                      <div>
                        <IonButton onClick={e => setApiKeyEditMode(false)}>
                          <IonIcon icon={checkmark}></IonIcon>
                        </IonButton>
                        <IonButton onClick={e => setSettings({
                          ...setting,
                          'apiKey': 'd0803559f03dafe4ee9b2515f4dc8c21'
                        })}>
                          <IonIcon icon={refresh} size="small"></IonIcon>
                        </IonButton>
                      </div>
                    )
                  }
                </IonButtons>
              </IonToolbar>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonSelect label="Language" className="ion-margin-top ion-margin-bottom" value={setting?.language} onIonChange={e => setSettings({
              ...setting,
              'language': e.target.value
            })}
              fill="solid"
            >
              <IonSelectOption value="en">en</IonSelectOption>
              <IonSelectOption value="id">id</IonSelectOption>
            </IonSelect>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
