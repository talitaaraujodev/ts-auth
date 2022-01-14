import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import bcryptjs from"bcryptjs";

@Entity("users")
 class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
    this.password = bcryptjs.hashSync(this.password, 8);  
    }

}
export default User;