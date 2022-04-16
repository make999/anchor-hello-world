import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Proj1 } from "../target/types/proj1";

describe("proj1", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Proj1 as Program<Proj1>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
