import { makeAutoObservable } from "mobx";

class UserDataStore {
    emailStore = "";
    forenameStore = "";
    numVisitsStore = 0;
    photoStore: string | undefined = "";
    surnameStore = "";
    uidStore: string | null = "";
    isAuthClient = false;
    isAuthServer = false;
    groupsStore: any = [];


    constructor() {
        makeAutoObservable(this);
    };

    setPhotAndNameUser = (photo:string, name:string) => {
        this.photoStore = photo;
        this.forenameStore = name;
    };

    setAuthClient = () => {
        this.isAuthClient = true;
    };

    setNumVisitsUser = (numVisits: number) => {
        this.numVisitsStore = numVisits;
    };

    setPhotoUser = (photo: string | undefined) => {
        this.photoStore = photo;
    };

    setForenameSurnameUser = (forename: string, surname: string) => {
        this.forenameStore = forename;
        this.surnameStore = surname;
    };

    setDataUserFromDB = async (userData: any) => {

        this.emailStore = userData.email;
        this.forenameStore = userData.forename;
        this.numVisitsStore = userData.numVisits;
        this.photoStore = userData.photo;
        this.surnameStore = userData.surname;
        this.isAuthServer = userData.surname;

        if (Array.isArray(userData.groups)) {
            this.groupsStore = [...this.groupsStore, ...userData.groups];
        } else {
            this.groupsStore = userData.groups ? [userData.groups] : [];
        };
    };

};

const userDataStore = new UserDataStore();
export { userDataStore };