import { CompanyCandidate } from "./company-candidate";
import { CompanyUser } from "./company-user";
import { Test } from "./test";

export interface Vaga {
    _id: number,
    status: number, // modelar tabela de status para a vaga, ex 1=desativado, 2=em Analise, 3=Fechado, 4=Aguardando Aprovação
    name: String,
    description: String,
    in_charge: CompanyUser | null,
    asked_by: CompanyUser | null,
    collaborators: [CompanyUser] | [],
    tests: [Test] | [],
    candidates: [CompanyCandidate] | []        
}
