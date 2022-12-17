
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Response as Res } from 'express';
import { Response } from '@nestjs/common';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
			  private jwtService: JwtService
	) {}

  async validateUser(profile: any): Promise<any> {
    var user: any = await this.usersService.findbylogin(profile);
	if (!user) {
		console.log("hello form the other side")
		return await this.usersService.addUserAuth(profile);
	}
	// console.log("testtt");
    return user;
  }

  async login(user: any, @Response() res: Res) {
	const playload = { username: user.login, sub: user.id};
	// console.log("login jwt")
	res.cookie('Authorization', 'Bearer ' + this.jwtService.sign(playload)).redirect("http://localhost:3000/Settings");
  }
}