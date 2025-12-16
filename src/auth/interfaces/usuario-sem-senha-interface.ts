import { Postagem } from "../../postagem/entities/postagem.entity";

export class UsuarioSemSenha {
    id: number;
    nome: string;
    usario: string;
    foto: string;
    postagem: Postagem[];
}

//criar interfaces para colocar nas Promises