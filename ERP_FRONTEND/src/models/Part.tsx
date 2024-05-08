export interface IPart {
    _id: string;
    pn: string;
    description: string[];
    rev: string;
    status: number;
    pref: number;
    ecn: string;
    oh: number;
    cost: number;
    type: number;
    drawing: string[];
    assembly: [string, number ][];
    used: string[];
    vendor: string[];
  }