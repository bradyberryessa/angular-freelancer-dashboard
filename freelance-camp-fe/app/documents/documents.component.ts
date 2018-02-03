import { Component } from '@angular/core';
import { Document } from './document';

@Component ({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My first Doc",
      description: "Sample Data",
      file_url: "http://google.com",
      updated_at: "2/1/2018",
      image_url: "https://media.licdn.com/mpr/mpr/AAIA_wDGAAAAAQAAAAAAAAmaAAAAJDZkMDI3MzNjLWEwY2UtNDBkZC1iMjFkLWI1MzFjNWQ1Zjk2YQ.jpg"
    },
    {
      title: "My second Doc",
      description: "Sample Data",
      file_url: "http://google.com",
      updated_at: "2/1/2018",
      image_url: "https://media.licdn.com/mpr/mpr/AAIA_wDGAAAAAQAAAAAAAAmaAAAAJDZkMDI3MzNjLWEwY2UtNDBkZC1iMjFkLWI1MzFjNWQ1Zjk2YQ.jpg"
    },
    {
      title: "My last Doc",
      description: "Sample Data",
      file_url: "http://google.com",
      updated_at: "2/1/2018",
      image_url: "https://media.licdn.com/mpr/mpr/AAIA_wDGAAAAAQAAAAAAAAmaAAAAJDZkMDI3MzNjLWEwY2UtNDBkZC1iMjFkLWI1MzFjNWQ1Zjk2YQ.jpg"
    }
  ]
} 