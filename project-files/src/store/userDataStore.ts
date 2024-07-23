import { makeAutoObservable } from "mobx";

class UserDataStore {
    uid = "";
    photo: string | undefined = "";
    forename = ""
    surname = ""

    constructor() {
        makeAutoObservable(this);
    };

    setUID = (uid: any) => {
        this.uid = uid;
        console.log(this.uid);
    };

    setPhotoUser = (photo: string | undefined) => {
        this.photo = photo;
        console.log(this.photo);
    }

    setForenameSurnameUser = (forename: string, surname: string) => {
        this.forename = forename;
        this.surname = surname;
    };

};

const userDataStore = new UserDataStore();
export { userDataStore };