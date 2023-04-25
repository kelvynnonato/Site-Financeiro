package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_account")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(of = {"id"})
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;

    @NotNull
    @Column(length = 50)
    @Size(min = 9, max = 50)
    private long Number;

    @NotNull
    @Column(length = 50)
    @Size(min = 4, max = 50)
    private long Agency;

    @NotNull
    @Column(length = 50)
    @Size(min = 4, max = 50)
    private String Bank;

    @ManyToOne
    @JoinColumn(name = "typeAccount_id", referencedColumnName = "id")
    private TypeAccount Type;


}
