import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <div>
      <h1>Countries API</h1>
      <p>A basic API for getting countries and cities list</p>
      <small>Created by Yilmer Avila</small><br><br>
      <a href="linkedin.com/in/yilmeravila/" target="_blank">LinkedIn</a>
    </div>
    `;
  }
}
