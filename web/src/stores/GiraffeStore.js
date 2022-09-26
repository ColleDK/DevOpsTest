import {makeAutoObservable, makeObservable, observable, runInAction} from "mobx";

const baseurl = process.env.NODE_ENV === 'development' ? "http://localhost:8080/" : ""

class GiraffeStore {
    giraffes = ["Marius", "Melman"]

    constructor(props) {
        makeAutoObservable(
            this,
            {},
            {autoBind:true}
        )
        this.fetchGiraffes()
    }

    fetchGiraffes(){
        fetch(baseurl + "api/giraffes").then(
            (response) => response.json().then(
                (json) => runInAction(() => this.giraffes = json)
            )
        )
    }

    addGiraffe = (giraffe) => {
        this.giraffes.push(giraffe)
    }
}

export const giraffeStore = new GiraffeStore()