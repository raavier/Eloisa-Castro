import { InvalidParameterError } from "../../errors/InvalidParameterError";
import { VideoGateway } from "../../gateways/videoGateway";

export class DeleteVideoUC {
  constructor(
    private videoGateway: VideoGateway,
  ) {}

  public async execute(input: DeleteVideoUCInput): Promise<DeleteVideoUCOutput> {
    if (!input.token) {
      throw new Error("Missing authorization token")
    }
    
    if (!input.id) {
      throw new InvalidParameterError("Invalid parameters")
    }

    await this.videoGateway.deleteVideo(input.id)
    
    return {
      message: "Video deleted successfuly"
    };
  }
}

interface DeleteVideoUCInput {
  id: string;
  token: string;
}

interface DeleteVideoUCOutput {
  message: string;
}