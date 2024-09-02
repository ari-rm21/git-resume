import { Component, AfterViewInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'Ariana Rodriguez';
  ngAfterViewInit() {
    this.animate();
  }


  downloadPDF() {
    const pdfUrl = '../assets/curriculum.pdf'; 

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'ArianaRodriguez_Resume.pdf'; 


    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
  }


  animate() {
    const h3Element = document.querySelectorAll('.main_wrapper');
    const progressBarEnglish = document.querySelectorAll('#progressBarEnglish');
    const progressBarSpanish = document.querySelectorAll('#progressBarSpanish');
    if (h3Element) {
      gsap.fromTo(h3Element, 
        { opacity: 0 }, 
        { 
          
          opacity: 1,  
          duration: 5, 
        }
      );
    }
    if (progressBarEnglish) {
      gsap.fromTo(progressBarEnglish, 
        { opacity: 1 }, 
        { 
          width: 184,  
          duration: 5,
          repeat: -1,
          delay: 5,
        }
      );
    }
    if (progressBarSpanish) {
      gsap.fromTo(progressBarSpanish, 
        { opacity: 1 }, 
        { 
          width: 230,  
          duration: 5, 
          repeat: -1,
          delay: 5,
        }
      );
    }
  }
}
