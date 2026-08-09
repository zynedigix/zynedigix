/**
 * ============================================================================
 * ZyneDigix App Types
 * ============================================================================
 */

export interface AppContextValue {
  initialized: boolean;
  loading: boolean;

  setLoading: (value: boolean) => void;
}