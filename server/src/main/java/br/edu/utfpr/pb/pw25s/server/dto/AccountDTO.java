package br.edu.utfpr.pb.pw25s.server.dto;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class AccountDTO {

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

    private TypeAccountDTO Type;

}

