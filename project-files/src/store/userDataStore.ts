import { makeAutoObservable } from "mobx";

class UserDataStore {
    emailStore = "";
    forenameStore = "";
    numVisitsStore = 0;
    photoStore: string | undefined = "";
    surnameStore = "";
    uidStore = "";
    groupsStore: any = [];
    

    constructor() {
        makeAutoObservable(this);
    };

    setUID = (uid: any) => {
        this.uidStore = uid;
    };

    setNumVisitsUser = (numVisits:number) => {
        this.numVisitsStore = numVisits;
    };

    setPhotoUser = (photo: string | undefined) => {
        this.photoStore = photo;
    };

    setForenameSurnameUser = (forename: string, surname: string) => {
        this.forenameStore = forename;
        this.surnameStore = surname;
    };

    setDataUserFromDB = (userData: any) => {
        console.log(this.forenameStore, this.photoStore, this.photoStore);
        this.emailStore = userData.email;
        this.forenameStore = userData.forename;
        this.numVisitsStore = userData.numVisits;
        this.photoStore = userData.photo;
        this.surnameStore = userData.surname;
        this.uidStore = userData.uid;

        if (Array.isArray(userData.groups)) {
            this.groupsStore = [...this.groupsStore, ...userData.groups];
        } else {
            this.groupsStore = userData.groups ? [userData.groups] : [];
        };
    };

};

const userDataStore = new UserDataStore();
export { userDataStore };