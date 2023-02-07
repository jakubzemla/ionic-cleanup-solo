import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { logOutOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  hasStyle: boolean;
}

const appPages: AppPage[] = [
  {
    title: 'Prihlásenie zákazníka',
    url: '/customer/login',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline,
    hasStyle: false
  },
  {
    title: 'Odhlásenie',
    url: '/logout',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline,
    hasStyle: true
  },
];

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon className={`${appPage.hasStyle && 'rotate-icon'}`} slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
