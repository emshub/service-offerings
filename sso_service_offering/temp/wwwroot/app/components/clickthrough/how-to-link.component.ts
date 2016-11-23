import {Component, OnInit, Input} from 'angular2/core'; 
import { ROUTER_DIRECTIVES, RouteParams} from 'angular2/router'; 
import {Clickthrough} from '../../model/clickthrough';
import {ClickThroughService} from '../../service/clickthrough.service';

declare var $: any;

@Component({
    selector: 'how-to-link',
    templateUrl: 'app/html/clickthrough/how-to-link.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ClickThroughService]

})

export class HowToLinkComponent implements OnInit {
    public label: string;

    constructor(private _routeParams: RouteParams,
        private _clickThroughService: ClickThroughService) {

        this.label = "View Set-up Guide"
    }
    clickthroughId = +this._routeParams.get('id');

    ngOnInit() {
        $('#video-modal').on('hidden.bs.modal', function (e) {
            for (var i = 0; i < 4; i++) {
                $("#video-modal video")[i].pause();
            }

        })
    }

    playVideo() {
        var videoName = "sso";
        switch (this.clickthroughId) {
            case 2:
                videoName = "mam";
                break;
            case 3:
                videoName = "mdm";
                break;
            case 4:
                videoName = "mfa";
                break;
        }
                
        $("#video-modal video").addClass("hidden");
        $("#" + videoName + "-video").removeClass("hidden");
        $('#video-modal').modal("toggle");
    }

    closeVideo() {
        $('#video-modal').modal("toggle");
    }
}
  
