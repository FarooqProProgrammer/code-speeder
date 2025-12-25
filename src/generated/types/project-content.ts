import { ProjectModel, ProjectCreateInput } from "./project";

export interface ProjectContentModel {
  id: string;
  content: string;
  projectId: string;
  createdAt: string;
  updatedAt: string;
  project?: ProjectModel;
}

export interface ProjectContentCreateInput {
  id?: string;
  content: string;
  projectId?: string;
  createdAt?: string;
  updatedAt?: string;
  project?: ProjectCreateInput;
}

export type ProjectContentUpdateInput = Partial<ProjectContentCreateInput>;

