
import StarredPageComponent from "../components/starred-page-component";
import StorageService from "./services/storage-service.js";
const storageService2 = new StorageService();
const starredPageC = new StarredPageComponent(storageService2);

starredPageC.start();

