package br.edu.utfpr.pb.pw25s.server.dto;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class AccountDTO {

    private long id;

    @NotNull
    private long number;

    @NotNull
    private long agency;

    @NotNull
    @Size(min = 4, max = 50)
    private String bank;

    private TypeAccountDTO type;

}

