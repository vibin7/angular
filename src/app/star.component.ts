import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector : 'ai-star',
    templateUrl : './star.component.html'
})

export class StarComponent implements OnChanges{
    @Input() rating : number;
    starWidth : number;

    ngOnChanges(): void {
       this.starWidth = this.rating * 96/5;
        
    }
}