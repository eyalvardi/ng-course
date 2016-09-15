/**
 * Created by Eyal on 9/2/2016.
 */
import {NgModule} from "@angular/core";
import {MrUser, MissUser} from "./User";

@NgModule({
    declarations    :[ MissUser , MrUser ],
    entryComponents :[ MissUser , MrUser ]
})
export default class UsersModule{
    public MissUser = MissUser
    public MrUser   = MrUser;
}