import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import AOS from 'aos'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  userName:any=""
  email:string=""
  telNo:string= ""
  message: string= ""
  warning: string="" 
  detail:any
  submitted: boolean= true
  url:string="http://localhost:3000/contact"
  isScrolled:boolean= false
  constructor(private http: HttpClient){}

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.isScrolled= scrollY > 100;
  } 

  showName(){
    // this.message= this.userName
    // console.log(this.userName)
  }

  ngAfterViewInit(){
    if (typeof window !== 'undefined'){
      AOS.init()
    }
    
  }

  onSubmit(){
    this.detail={
      userName: this.userName,
      email: this.email,
      telNo: this.telNo,
      message: this.message
    }

    this.http.post<any>(this.url, this.detail).subscribe(res=>{
      
      this.submitted= false 
      console.log(res.message)
    }, error=> {
      this.warning= error.message
      console.log(error)
    })
    // console.log(this.detail)
  }

  scrollToContact() {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  testimonials= [
    {
      "name": "Rajesh Kumar",
      "service": "Digital Marketing",
      "testimonial": "Our business saw a huge boost in online traffic thanks to their digital marketing expertise. Their strategies are spot on, and they really understood our target audience. Highly recommended!"
    },
    {
      "name": "Priya Sharma",
      "service": "Digital Marketing",
      "testimonial": "This team transformed our online presence. Our social media engagement and website visits have doubled within a few months. They deliver results and are always available for support."
    },
    {
      "name": "Vikram Singh",
      "service": "Digital Marketing",
      "testimonial": "Professional and effective! They helped us reach a wider audience and increase our customer base through focused digital campaigns. We’re very happy with the service."
    },
    {
      "name": "Anjali Verma",
      "service": "Digital Marketing",
      "testimonial": "They know exactly how to connect with the right customers online. Since we started with them, our brand recognition has skyrocketed. We couldn't have done it without their help!"
    },
    {
      "name": "Manish Patel",
      "service": "Website Building",
      "testimonial": "They built an amazing website for us that looks great and works perfectly on all devices. Our clients love the new design, and we’ve seen an increase in inquiries as a result."
    },
    {
      "name": "Neha Gupta",
      "service": "Website Building",
      "testimonial": "I’m impressed by their professionalism and attention to detail. The website they created for us not only looks fantastic but also functions seamlessly. Great job!"
    }
  ]

  visibleTestimonials:any = [];
  currentIndex = 0;
  interval: any;

  ngOnInit(){
    this.updateVisibleTestimonials();
    // this.startAutoSlide();
  }

  updateVisibleTestimonials() {
    this.visibleTestimonials = this.testimonials.slice(this.currentIndex, this.currentIndex + 2);
  }

  nextTestimonials() {
    this.currentIndex = (this.currentIndex + 2) % this.testimonials.length;
    this.updateVisibleTestimonials();
  }

  prevTestimonials(){
    this.currentIndex = (this.currentIndex - 2 + this.testimonials.length) % this.testimonials.length;
    this.updateVisibleTestimonials();
  }

  // startAutoSlide() {
  //   this.interval = setInterval(() => {
  //     this.nextTestimonials();
  //   }, 3000); // 3 seconds interval
  // } 
 
  // ngOnDestroy(): void {
  //   clearInterval(this.interval);
  // }

}
