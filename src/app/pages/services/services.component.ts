import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  public products: Product[] = []
  public loader: boolean = false;
  constructor(private apiService : ApiService) {}

  ngOnInit() {
    this.loader = true
    this.getProductsList()
  }

  // Getting products list
  async getProductsList (){
    this.products = await lastValueFrom(this.apiService.getProducts())
    this.products?.length > 0 ? this.loader = false : this.loader = true
  }
}
