/**
 * Created by Eyal on 6/29/2016.
 */
export const NG_COURSE = [

];
export function NgCourse(){
    return (target)=>{
        NG_COURSE.push(target);
        return target;
    }
}