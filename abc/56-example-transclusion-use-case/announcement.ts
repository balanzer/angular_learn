import { Component, Directive } from '@angular/core';

@Component({
  selector: 'announcement',
  templateUrl: './announcement.html'
})
export class AnnouncementComponent { }

@Directive({
  // Having incorporated the CUSTOM_ELEMENTS_SCHEMA allows for full customization of the selector tags
  selector: 'announcement-title, announcement-image, announcement-description'
})
export class AnnouncementComponentTags { }
