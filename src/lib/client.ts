import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

// ✅ FIX: Import dari '_pb', BUKAN '_connect'
// File _pb.ts (hasil generate v2) berisi definisi 'DescService' yang lengkap.
import { CodeGenService } from "@/gen/codegen/v1/codegen_pb";

const transport = createConnectTransport({
  baseUrl: "http://localhost:3001", // Pastikan port sesuai backend (3000 atau 3001)
});

// ✅ Sekarang CodeGenService adalah 'DescService' yang valid. Error hilang!
export const codeGenClient = createClient(CodeGenService, transport);
