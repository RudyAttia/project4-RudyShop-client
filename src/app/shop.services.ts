import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class shopService {

  constructor(public http: HttpClient) { }

    public ifToken(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get('http://localhost:5000/api/users/verifytoken',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public getCart(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get('http://localhost:5000/api/carts/cart',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public getUser(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get('http://localhost:5000/api/users/user',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public getItems(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post('http://localhost:5000/api/carts/items',{cart_id:data},{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public changeQuantity(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.put('http://localhost:5000/api/carts/changequantity',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public getlogin(data){
      return this.http.post('http://localhost:5000/api/users/login',data)
    }

    public getinfo(){
      return this.http.get('http://localhost:5000/api/users/infocount')
    }

    public getcategorys(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get('http://localhost:5000/api/products/categorys',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public getproducts(category_id){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post('http://localhost:5000/api/products/products',category_id,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public verifyIdOrEmail(data){
      return this.http.post('http://localhost:5000/api/users/verifidmail',data)
    }

    public signupNewUser(data){
      return this.http.post('http://localhost:5000/api/users/add',data)
    }

    public viewCart(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get('http://localhost:5000/api/carts/cart',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public addCart(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get('http://localhost:5000/api/carts/addcart',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public addItem(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post('http://localhost:5000/api/carts/addcartitem',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public deleteItem(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post('http://localhost:5000/api/carts/deleteitem',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public deleteCart(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post('http://localhost:5000/api/carts/deletecart',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public searchProduct(theSearch){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post('http://localhost:5000/api/products/search',{theSearch:theSearch},{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public uploadImg(data){
      return this.http.post('http://localhost:5000/api/products/upload',data)
    }

    public addProduct(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post('http://localhost:5000/api/products/addproduct',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public modifyProduct(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post('http://localhost:5000/api/products/modifyproduct',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public addOrder(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post('http://localhost:5000/api/carts/addorder',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }
    
    public dates3(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get('http://localhost:5000/api/carts/dates3',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }
}
