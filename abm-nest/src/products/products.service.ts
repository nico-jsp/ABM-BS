import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';
import { InjectModel, ModelDefinition } from "@nestjs/mongoose";
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
    
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>
    ) {} 

    async insertProduct(title: string, description: string, price: number){
        const newProduct = new this.productModel({
            title: title,           //can be written only as "title,", and it will auto-expand to "title: title,"
            description: description,
            price: price,
        });
        const result = await newProduct.save();
        return result._id;
    }

    async getProducts (){
        const products = await this.productModel.find().exec();
        return products.map((prod)=> ({
            id:prod.id,
            title: prod.title,
            description: prod.description,
            price: prod.price,
        })) as Product[];
    }

    async getSingleProduct (productId: string){
        const product = await this.findProduct(productId);
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
        };
    }

    async updateProduct(productId: string, title: string, desc: string, price: number){
        const updatedProduct = await this.findProduct(productId);
        
        if (title){
            updatedProduct.title = title;
        }
        if (desc){
            updatedProduct.description = desc;
        }
        if (price){
            updatedProduct.price = price;
        }
        updatedProduct.save();
    }

    async deleteProduct(prodId: string){
        const result = await this.productModel.deleteOne({_id: prodId}).exec();
        if(result.n===0) {
            throw new NotFoundException('Could not find product to delete');
        }
    }

    private async findProduct(id: string): Promise<Product> {
        let product;

        try{ 
            product = await this.productModel.findById(id);
        } catch(error) {
            throw new NotFoundException('Could not find product.');
        }
        if (!product){
            throw new NotFoundException('Could not find product.');
        }

        return product;
    }
    
}