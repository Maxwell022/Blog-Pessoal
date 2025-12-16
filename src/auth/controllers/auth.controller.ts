import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { LocalAuthnGuard } from "../guard/local-auth.guard";


@Controller('/usuarios')
export class AuthController {
    constructor(private authnService: AuthService){}

    @UseGuards(LocalAuthnGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    login(@Body() usuario: UsuarioLogin): Promise<any>{
        return this.authnService.login(usuario);
    }
}