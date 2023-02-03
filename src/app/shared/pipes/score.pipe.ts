import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value>0){
      return "+ "+value.toString();
    }else if (value<0){
      return "- "+(-value).toString();
    }
    return value.toString();
  }

}
