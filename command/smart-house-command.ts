// criando interface

export interface SmartHouseCommand {
    execute(): void;
    undo(): void;
  }