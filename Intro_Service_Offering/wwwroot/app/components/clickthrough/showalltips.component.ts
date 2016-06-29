import {Component, Input} from 'angular2/core';
import {ToolTip} from '../../model/tooltip';
import {ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'showall-tips',
    templateUrl: 'app/html/clickthrough/showalltips.html',
    styleUrls: ["../../app/styles/clickthrough/showalltips.min.css"],
    encapsulation: ViewEncapsulation.None
})
export class ShowAllTipsComponent {
    @Input() toolTips: ToolTip[] = [];
    showAllTipsIsExpanded = false;
}