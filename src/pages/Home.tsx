import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PalindromeTable from "../components/Table/PalindromeTable";
import {
  AlertColor,
  Button,
  Card,
  FormHelperText,
  Grid,
  OutlinedInput,
} from "@mui/material";
import { useIsPalindrome } from "../components/hook/useIsPalindrome";
import { useState } from "react";
import Message from "../components/Message/Message";
import { schema } from "../utils/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPalindrome } from "../data/palindromes";

export const Home = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: createPalindromeFn } = useMutation({
    mutationFn: createPalindrome,
    onSuccess(_, variables) {
      queryClient.setQueryData(["palindromes"], (data: IPalindromeData[]) => {
        return [
          ...data,
          {
            value: variables.value,
            isPalindrome: variables.isPalindrome,
          },
        ];
      });
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      word: "",
    },
  });

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleMessageChange = (message: string, severity: AlertColor) => {
    setMessage(message);
    setSeverity(severity);
  };

  const watchWord = watch("word");
  const isPalindrome = useIsPalindrome(watchWord);
  const onSubmit = async (data: IFormValues) => {
    setLoading(true);
    const newItem = { value: data.word, isPalindrome };

    try {
      await createPalindromeFn(newItem);
      reset();
      setOpen(true);
      setLoading(false);
      handleMessageChange("Salvo com sucesso!", "success");
    } catch (error) {
      handleMessageChange("Erro ao fazer o POST", "error");
      console.error("Erro ao fazer o POST:", error);
      setLoading(false);
    }
  };

  const getInputFieldClassName = () => {
    if (
      watchWord === "" ||
      /^\s/.test(watchWord) ||
      watchWord.length < 3 ||
      /[0-9]/.test(watchWord)
    ) {
      return "";
    } else if (isPalindrome) {
      return "border-green";
    } else {
      return "border-orange";
    }
  };

  return (
    <>
      <Message
        open={open}
        message={message}
        severity={severity}
        handleClose={handleClose}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          component={Card}
          container
          spacing={2}
          alignItems="center"
          style={{ padding: "20px", borderRadius: "16px" }}
        >
          <Grid item xs={12} sm={8} md={10} lg={10} order={1}>
            <OutlinedInput
              {...register("word")}
              className={getInputFieldClassName()}
              type="text"
              disabled={false}
              placeholder="Informe uma palavra"
              size="small"
              style={{ width: "100%", borderRadius: "8px" }}
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
          <Grid item sx={{ order: 3, md: { order: 2 } }}>
            {errors.word && (
              <FormHelperText error>{errors.word.message}</FormHelperText>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={1.5}
            sx={{ order: 2, md: { order: 3 } }}
          >
            <Button
              disabled={loading}
              type="submit"
              startIcon={<FaPlus size={14} />}
              variant="contained"
              size="small"
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "8px",
                textTransform: "none",
                padding: "4px 8px",
              }}
            >
              Salvar
            </Button>
          </Grid>
          <Grid item xs={12} order={4}>
            <PalindromeTable />
          </Grid>
        </Grid>
      </form>
    </>
  );
};
