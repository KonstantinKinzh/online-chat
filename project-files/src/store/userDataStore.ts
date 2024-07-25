import { makeAutoObservable } from "mobx";

class UserDataStore {
    uid = "";
    numVisitsUser = 0;
    photo: string | undefined = "";
    forename = "";
    surname = "";
    groups: any = [];

    constructor() {
        makeAutoObservable(this);
    };

    setUID = (uid: any) => {
        this.uid = uid;
        console.log(this.uid);
    };

    setNumVisitsUser = (numVisits:number) => {
        this.numVisitsUser = numVisits;
        console.log(this.numVisitsUser);
    };

    setPhotoUser = (photo: string | undefined) => {
        this.photo = photo;
        // console.log(this.photo);
    };

    setForenameSurnameUser = (forename: string, surname: string) => {
        this.forename = forename;
        this.surname = surname;
    };

    setDataUserFromDB = (userData: any) => {
        this.photo = userData.photo;
        this.forename = userData.forename;
        this.surname = userData.surname;

        if (Array.isArray(userData.groups)) {
            this.groups = [...this.groups, ...userData.groups];
        } else {
            this.groups = userData.groups ? [userData.groups] : [];
        };
    };

};

const userDataStore = new UserDataStore();
export { userDataStore };